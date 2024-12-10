document.addEventListener("DOMContentLoaded", () => {
    const payroll = new Payroll();

    // Buttons
    const addEmployeeBtn = document.getElementById("addEmployeeBtn");
    const removeEmployeeBtn = document.getElementById("removeEmployeeBtn");
    const clearPayrollBtn = document.getElementById("clearPayroll");
    const generateEmployeeBtn = document.getElementById("generateEmployee");

    // Modals
    const addEmployeeModal = document.getElementById("addEmployeeModal");
    const removeEmployeeModal = document.getElementById("removeEmployeeModal");

    // Close Buttons
    const closeAddModal = document.getElementById("closeAddModal");
    const closeRemoveModal = document.getElementById("closeRemoveModal");

    // Forms
    const addEmployeeForm = document.getElementById("addEmployeeForm");
    const removeEmployeeForm = document.getElementById("removeEmployeeForm");

    // Show/Hide Modals
    addEmployeeBtn.addEventListener("click", () => addEmployeeModal.classList.add("active"));
    removeEmployeeBtn.addEventListener("click", () => removeEmployeeModal.classList.add("active"));

    closeAddModal.addEventListener("click", () => addEmployeeModal.classList.remove("active"));
    closeRemoveModal.addEventListener("click", () => removeEmployeeModal.classList.remove("active"));

    // Add Employee
    addEmployeeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("employeeName").value;
        const daysWorked = parseFloat(document.getElementById("daysWorked").value);
        const dailyRate = parseFloat(document.getElementById("dailyRate").value);
        const deductionAmount = parseFloat(document.getElementById("deductionAmount").value);

        const employee = new Employee(name, daysWorked, dailyRate, deductionAmount);
        payroll.addEmployee(employee);
        addEmployeeForm.reset();
        addEmployeeModal.classList.remove("active");
    });

    // Remove Employee
    removeEmployeeForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const employeeNo = parseInt(document.getElementById("employeeNo").value, 10);
        payroll.deleteEmployee(employeeNo);
        removeEmployeeForm.reset();
        removeEmployeeModal.classList.remove("active");
    });

    // Clear Payroll
    clearPayrollBtn.addEventListener("click", () => payroll.clearPayroll());

    // Generate Random Employee
    generateEmployeeBtn.addEventListener("click", () => {
        const employee = new Employee(
            `Employee ${payroll.employees.length + 1}`,
            Math.floor(Math.random() * 15 + 1),
            Math.floor(Math.random() * 100 + 50),
            Math.floor(Math.random() * 50)
        );
        payroll.addEmployee(employee);
    });
});

// Employee Class
class Employee {
    constructor(name, daysWorked, dailyRate, deductionAmount) {
        this.name = name;
        this.daysWorked = daysWorked;
        this.dailyRate = dailyRate;
        this.deductionAmount = deductionAmount;
    }

    getGrossPay() {
        return this.daysWorked * this.dailyRate;
    }

    getNetPay() {
        return this.getGrossPay() - this.deductionAmount;
    }
}

// Payroll Class
class Payroll {
    constructor() {
        this.employees = [];
        this.tableBody = document.querySelector("#payrollTable tbody");
    }

    addEmployee(employee) {
        this.employees.push(employee);
        this.updateTable();
    }

    deleteEmployee(index) {
        if (index > 0 && index <= this.employees.length) {
            this.employees.splice(index - 1, 1);
            this.updateTable();
        } else {
            alert("Invalid employee number!");
        }
    }

    clearPayroll() {
        this.employees = [];
        this.updateTable();
    }

    updateTable() {
        this.tableBody.innerHTML = "";
        this.employees.forEach((employee, index) => {
            const row = `
                <tr>
                    <td>${index + 1}</td>
                    <td>${employee.name}</td>
                    <td>${employee.daysWorked}</td>
                    <td>${employee.dailyRate.toFixed(2)}</td>
                    <td>${employee.getGrossPay().toFixed(2)}</td>
                    <td>${employee.deductionAmount.toFixed(2)}</td>
                    <td>${employee.getNetPay().toFixed(2)}</td>
                </tr>
            `;
            this.tableBody.insertAdjacentHTML("beforeend", row);
        });
    }
}
