
export interface NgDebugConfig {
    name: string;
    items: NgDebugConfigItem[];
}

export interface NgDebugConfigItem {
    id: string,
    name: string,
    type: 'checkbox' | 'text',
}
