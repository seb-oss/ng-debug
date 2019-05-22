
export interface DebugConfig {
    name: string;
    items: DebugConfigItem[];
}

export interface DebugConfigItem {
    id: string,
    name: string,
    type: 'checkbox' | 'text',
}
