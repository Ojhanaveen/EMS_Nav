const BASE_URL = 'http://localhost:8000'; // Corrected

export const GetAllEmployees = async (search = '', page = 1, limit = 5) => {
    const url = `${BASE_URL}/api/employees?search=${search}&page=${page}&limit=${limit}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const result = await fetch(url, options);
        const { data } = await result.json();
        return data;
    } catch (err) {
        console.error("Error fetching employees: ", err);
        throw err;
    }
};

export const GetEmployeeDetailsById = async (id) => {
    const url = `${BASE_URL}/api/employees/${id}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const result = await fetch(url, options);
        const { data } = await result.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error("Error fetching employee by ID: ", err);
        throw err;
    }
};

export const DeleteEmployeeById = async (id) => {
    const url = `${BASE_URL}/api/employees/${id}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    try {
        const result = await fetch(url, options);
        const data = await result.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error("Error deleting employee: ", err);
        throw err;
    }
};

export const CreateEmployee = async (empObj) => {
    const url = `${BASE_URL}/api/employees`;
    console.log('url ', url);

    const formData = new FormData();
    for (const key in empObj) {
        formData.append(key, empObj[key]);
    }

    const options = {
        method: 'POST',
        body: formData,
    };
    try {
        const result = await fetch(url, options);
        const data = await result.json();
        return data;
    } catch (err) {
        console.error("Error creating employee: ", err);
        throw err;
    }
};

export const UpdateEmployeeById = async (empObj, id) => {
    const url = `${BASE_URL}/api/employees/${id}`;
    console.log('url ', url);

    const formData = new FormData();
    for (const key in empObj) {
        formData.append(key, empObj[key]);
    }

    const options = {
        method: 'PUT',
        body: formData,
    };
    try {
        const result = await fetch(url, options);
        const data = await result.json();
        console.log('<---update--> ', data);
        return data;
    } catch (err) {
        console.error("Error updating employee: ", err);
        throw err;
    }
};