/**
 * Mock API functions for Vietnamese Farm Management App
 *
 * These functions simulate API calls with artificial delays to mimic real network requests.
 * To replace with real API:
 * 1. Replace the mock data imports with actual API endpoints
 * 2. Replace setTimeout with actual fetch/axios calls
 * 3. Keep the same function signatures and return types
 */

import {
  mockWorkers,
  mockTasks,
  mockStaff,
  Worker,
  Task,
  Staff,
} from "../data/mockData";

// Simulate API delay
const API_DELAY = 500; // milliseconds

// Helper function to simulate API delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

// ==================== WORKERS API ====================

/**
 * Fetch all workers
 * Real API: GET /api/workers
 */
export const fetchWorkers = async (): Promise<Worker[]> => {
  await delay(API_DELAY);
  return [...mockWorkers];
};

/**
 * Fetch a single worker by ID
 * Real API: GET /api/workers/:id
 */
export const fetchWorkerById = async (id: string): Promise<Worker | null> => {
  await delay(API_DELAY);
  const worker = mockWorkers.find((w) => w.id === id);
  return worker ? { ...worker } : null;
};

/**
 * Create a new worker
 * Real API: POST /api/workers
 */
export const createWorker = async (
  workerData: Omit<Worker, "id">,
): Promise<Worker> => {
  await delay(API_DELAY);
  const newWorker: Worker = {
    id: Date.now().toString(),
    ...workerData,
  };
  mockWorkers.push(newWorker);
  return { ...newWorker };
};

/**
 * Update an existing worker
 * Real API: PUT /api/workers/:id
 */
export const updateWorker = async (
  id: string,
  workerData: Partial<Worker>,
): Promise<Worker | null> => {
  await delay(API_DELAY);
  const index = mockWorkers.findIndex((w) => w.id === id);
  if (index === -1) return null;

  mockWorkers[index] = { ...mockWorkers[index], ...workerData };
  return { ...mockWorkers[index] };
};

/**
 * Delete a worker
 * Real API: DELETE /api/workers/:id
 */
export const deleteWorker = async (id: string): Promise<boolean> => {
  await delay(API_DELAY);
  const index = mockWorkers.findIndex((w) => w.id === id);
  if (index === -1) return false;

  mockWorkers.splice(index, 1);
  return true;
};

// ==================== TASKS API ====================

/**
 * Fetch all tasks
 * Real API: GET /api/tasks
 */
export const fetchTasks = async (): Promise<Task[]> => {
  await delay(API_DELAY);
  return [...mockTasks];
};

/**
 * Fetch a single task by ID
 * Real API: GET /api/tasks/:id
 */
export const fetchTaskById = async (id: string): Promise<Task | null> => {
  await delay(API_DELAY);
  const task = mockTasks.find((t) => t.id === id);
  return task ? { ...task } : null;
};

/**
 * Create a new task
 * Real API: POST /api/tasks
 */
export const createTask = async (taskData: Omit<Task, "id">): Promise<Task> => {
  await delay(API_DELAY);
  const newTask: Task = {
    id: Date.now().toString(),
    ...taskData,
  };
  mockTasks.push(newTask);
  return { ...newTask };
};

/**
 * Update an existing task
 * Real API: PUT /api/tasks/:id
 */
export const updateTask = async (
  id: string,
  taskData: Partial<Task>,
): Promise<Task | null> => {
  await delay(API_DELAY);
  const index = mockTasks.findIndex((t) => t.id === id);
  if (index === -1) return null;

  mockTasks[index] = { ...mockTasks[index], ...taskData };
  return { ...mockTasks[index] };
};

/**
 * Delete a task
 * Real API: DELETE /api/tasks/:id
 */
export const deleteTask = async (id: string): Promise<boolean> => {
  await delay(API_DELAY);
  const index = mockTasks.findIndex((t) => t.id === id);
  if (index === -1) return false;

  mockTasks.splice(index, 1);
  return true;
};

// ==================== STAFF API ====================

/**
 * Fetch all staff members
 * Real API: GET /api/staff
 */
export const fetchStaff = async (): Promise<Staff[]> => {
  await delay(API_DELAY);
  return [...mockStaff];
};

/**
 * Fetch a single staff member by ID
 * Real API: GET /api/staff/:id
 */
export const fetchStaffById = async (id: string): Promise<Staff | null> => {
  await delay(API_DELAY);
  const staff = mockStaff.find((s) => s.id === id);
  return staff ? { ...staff } : null;
};

// ==================== AUTH API ====================

/**
 * Login with email and password
 * Real API: POST /api/auth/login
 */
export const login = async (
  email: string,
  password: string,
): Promise<{
  success: boolean;
  user?: { name: string; email: string };
  error?: string;
}> => {
  await delay(API_DELAY);

  // Mock authentication logic
  if (email === "admin@farm.com" && password === "admin123") {
    return {
      success: true,
      user: {
        name: "Admin User",
        email: "admin@farm.com",
      },
    };
  }

  return {
    success: false,
    error: "Email hoặc mật khẩu không đúng",
  };
};

/**
 * Login with Google (mock)
 * Real API: POST /api/auth/google
 */
export const loginWithGoogle = async (): Promise<{
  success: boolean;
  user?: { name: string; email: string };
  error?: string;
}> => {
  await delay(API_DELAY);

  // Mock Google authentication
  return {
    success: true,
    user: {
      name: "Google User",
      email: "user@gmail.com",
    },
  };
};

/**
 * Logout
 * Real API: POST /api/auth/logout
 */
export const logout = async (): Promise<{ success: boolean }> => {
  await delay(API_DELAY);
  return { success: true };
};
