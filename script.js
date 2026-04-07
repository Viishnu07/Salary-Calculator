document.addEventListener('DOMContentLoaded', () => {
    // Input Elements
    const basicSalaryInput = document.getElementById('basicSalary');
    const epfPercentInput = document.getElementById('epfPercent');
    const socsoPercentInput = document.getElementById('socsoPercent');
    const eisPercentInput = document.getElementById('eisPercent');
    const divisorInput = document.getElementById('divisor');
    
    const otDaysInput = document.getElementById('otDays');
    const phDaysInput = document.getElementById('phDays');
    const nightShiftsInput = document.getElementById('nightShifts');

    // Output Elements
    const calculatedDailyRateEl = document.getElementById('calculatedDailyRate');
    
    // Summary Output Elements
    const displayBasicEl = document.getElementById('displayBasic');
    const displayOTEl = document.getElementById('displayOT');
    const displayAllowanceEl = document.getElementById('displayAllowance');
    const displayEPFEl = document.getElementById('displayEPF');
    const displaySOCSOEl = document.getElementById('displaySOCSO');
    const displayEISEl = document.getElementById('displayEIS');
    const netTakeHomeEl = document.getElementById('netTakeHome');

    // Format utility
    const formatCurrency = (value) => {
        return `RM ${value.toFixed(2)}`;
    };

    // Main calculation logic
    const calculateSalary = () => {
        // 1. Gather Inputs
        const basic = parseFloat(basicSalaryInput.value) || 0;
        const epfPct = parseFloat(epfPercentInput.value) || 0;
        const socsoPct = parseFloat(socsoPercentInput.value) || 0;
        const eisPct = parseFloat(eisPercentInput.value) || 0;
        const divisor = parseFloat(divisorInput.value) || 26; // Default to 26 if missing

        const otDays = parseFloat(otDaysInput.value) || 0;
        const phDays = parseFloat(phDaysInput.value) || 0;
        const nightShifts = parseFloat(nightShiftsInput.value) || 0;

        // 2. Compute Rates
        const dailyRate = divisor > 0 ? basic / divisor : 0;
        calculatedDailyRateEl.textContent = formatCurrency(dailyRate);

        // 3. Compute Allowances and Overtime
        // OT = 1.5x, PH = 3.0x (as requested)
        const otPay = otDays * dailyRate * 1.5;
        const phPay = phDays * dailyRate * 3.0;
        const totalOvertime = otPay + phPay;
        
        const nightShiftAllowance = nightShifts * 20;

        // 4. Compute Deductions based on Malaysian Law
        // - EPF: Subject to Basic + Shift Allowances (NOT Overtime)
        // - SOCSO & EIS: Subject to all wages including Shift Allowances and Overtime
        const epfWages = basic + nightShiftAllowance;
        const epfDeduction = epfWages * (epfPct / 100);

        const socsoEisWages = basic + nightShiftAllowance + totalOvertime;
        const socsoDeduction = socsoEisWages * (socsoPct / 100);
        const eisDeduction = socsoEisWages * (eisPct / 100);

        // 5. Final Net Calculator
        const totalGross = basic + totalOvertime + nightShiftAllowance;
        const totalDeductions = epfDeduction + socsoDeduction + eisDeduction;
        const netTakeHome = totalGross - totalDeductions;

        // 6. Update UI
        displayBasicEl.textContent = formatCurrency(basic);
        displayOTEl.textContent = `+ ${formatCurrency(totalOvertime)}`;
        displayAllowanceEl.textContent = `+ ${formatCurrency(nightShiftAllowance)}`;
        
        displayEPFEl.textContent = `- ${formatCurrency(epfDeduction)}`;
        displaySOCSOEl.textContent = `- ${formatCurrency(socsoDeduction)}`;
        displayEISEl.textContent = `- ${formatCurrency(eisDeduction)}`;

        netTakeHomeEl.textContent = formatCurrency(netTakeHome);
    };

    // Attach Event Listeners to all inputs to trigger recalculation
    const inputs = [
        basicSalaryInput, epfPercentInput, socsoPercentInput, eisPercentInput, divisorInput,
        otDaysInput, phDaysInput, nightShiftsInput
    ];

    inputs.forEach(input => {
        input.addEventListener('input', calculateSalary);
    });

    // Initial calculation on load
    calculateSalary();
});
