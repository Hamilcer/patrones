import Observer from "./Observer";

abstract class Subject {
    private observers: Map<string, Observer> = new Map();

    addObserver(id: string, observer: Observer): void {
        this.observers.set(id, observer);
    }

    removeObserver(id: string): void {
        this.observers.delete(id);
    }

    protected notifyObservers(message: string): void {
        this.observers.forEach(observer => observer.update(message));
    }
}

export { Subject };