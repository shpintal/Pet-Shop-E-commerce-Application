import { NextRequest, NextResponse } from 'next/server';
import * as fs from 'fs';
import * as path from 'path';

interface UserData {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
}

interface User extends UserData {
  id: string;
  createdAt: string;
}

const usersDir = path.join(process.cwd(), 'data');
const usersFile = path.join(usersDir, 'users.json');

function ensureDataDir() {
  if (!fs.existsSync(usersDir)) {
    fs.mkdirSync(usersDir, { recursive: true });
  }
}

function getUsers(): User[] {
  ensureDataDir();
  if (!fs.existsSync(usersFile)) {
    return [];
  }
  const data = fs.readFileSync(usersFile, 'utf-8');
  return JSON.parse(data || '[]');
}

function saveUsers(users: User[]) {
  ensureDataDir();
  fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export async function POST(request: NextRequest) {
  try {
    const body: UserData = await request.json();

    // Валідація
    if (!body.username?.trim()) {
      return NextResponse.json(
        { error: 'Ім\'я користувача є обов\'язковим' },
        { status: 400 }
      );
    }

    if (body.username.length < 3) {
      return NextResponse.json(
        { error: 'Ім\'я користувача повинно містити щонайменше 3 символи' },
        { status: 400 }
      );
    }

    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: 'Невалідна email адреса' },
        { status: 400 }
      );
    }

    if (!body.password?.trim()) {
      return NextResponse.json(
        { error: 'Пароль є обов\'язковим' },
        { status: 400 }
      );
    }

    if (body.password.length < 6) {
      return NextResponse.json(
        { error: 'Пароль повинен містити щонайменше 6 символів' },
        { status: 400 }
      );
    }

    if (!body.firstName?.trim()) {
      return NextResponse.json(
        { error: 'Ім\'я є обов\'язковим' },
        { status: 400 }
      );
    }

    if (!body.lastName?.trim()) {
      return NextResponse.json(
        { error: 'Прізвище є обов\'язковим' },
        { status: 400 }
      );
    }

    // Перевірка, чи користувач вже існує
    const users = getUsers();
    const existingUser = users.find(
      u => u.email === body.email || u.username === body.username
    );

    if (existingUser) {
      return NextResponse.json(
        { error: 'Користувач з цим email або іменем вже існує' },
        { status: 409 }
      );
    }

    // Створення користувача
    const user: User = {
      ...body,
      id: `USR-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      createdAt: new Date().toISOString(),
    };

    // Збереження користувача
    users.push(user);
    saveUsers(users);

    // Повернення даних без пароля
    const { password, ...userWithoutPassword } = user;
    return NextResponse.json(
      {
        success: true,
        message: 'Реєстрація успішна!',
        user: userWithoutPassword,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error during registration:', error);
    return NextResponse.json(
      { error: 'Помилка при реєстрації' },
      { status: 500 }
    );
  }
}
