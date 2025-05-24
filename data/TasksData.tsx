export type Label = 'Bug' | 'Feature' | 'Documentation' | 'Testing' | 'Deployment' | 'Refactoring';
export type Priority = 'Low' | 'Medium' | 'High';
export type Status = 'Backlog' | 'Todo' | 'In Progress' | 'Done' | 'Canceled';
export type Task = {
    taskId: string;
    title: string;
    label: Label;
    isFavorite: boolean;
    priority: Priority;
    status: Status;
    createdAt: Date;
}

export const tasks: Task[] = [
    {
        taskId: 'Task-001',
        title: 'Implement new feature for user profiles',
        label: 'Feature',
        isFavorite: true,
        priority: 'High',
        status: 'In Progress',
        createdAt: new Date('2024-10-01')
    },
    {
        taskId: 'Task-002',
        title: 'Fix bug in payment processing module',
        label: 'Bug',
        isFavorite: false,
        priority: 'Medium',
        status: 'Todo',
        createdAt: new Date('2024-10-02')
    },
    {
        taskId: 'Task-003',
        title: 'Update documentation for API endpoints',
        label: 'Documentation',
        isFavorite: true,
        priority: 'Low',
        status: 'Done',
        createdAt: new Date('2024-10-03')
    },
    {
        taskId: 'Task-004',
        title: 'Conduct testing for new release',
        label: 'Testing',
        isFavorite: false,
        priority: 'High',
        status: 'Backlog',
        createdAt: new Date('2024-10-04')
    },
    {
        taskId: 'Task-005',
        title: 'Deploy application to production environment',
        label: 'Deployment',
        isFavorite: true,
        priority: 'Medium',
        status: 'In Progress',
        createdAt: new Date('2024-10-05')
    },
    {
        taskId: 'Task-006',
        title: 'Refactor codebase for better readability',
        label: 'Refactoring',
        isFavorite: false,
        priority: 'Low',
        status: 'Canceled',
        createdAt: new Date('2024-10-06')
    }
];