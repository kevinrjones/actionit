
import { Injectable } from "@angular/core";

@Injectable()
export class LocalStorageService {
    clear() {
        window.localStorage.clear()
    }
    
    getItem(key: string): string {
        return window.localStorage.getItem(key)
    }
    
    setItem(key: string, data: string) {
        window.localStorage.setItem(key, data)
    }

    removeItem(key: string) {
        window.localStorage.removeItem(key)
    }

    key(index: number): string {
        return window.localStorage.key(index)
    }

    get length(): number {
        return window.localStorage.length
    }
}