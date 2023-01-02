import { PhonesState } from "./phonesSlice";

// A mock function to mimic making an async request for data
export function fetchGetPeople() {
    return new Promise<{ data: PhonesState }>((resolve) =>
        fetch("https://swapi.dev/api/people/1")
    );
}


// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
    return new Promise<{ data: number }>((resolve) =>
        setTimeout(() => resolve({ data: amount }), 500)
    );
}
