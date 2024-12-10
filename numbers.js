document.getElementById("calculate").addEventListener("click", function()
            {           
                const n = parseInt(document.getElementById("numberInput").value);
                let result = "";

                let i = 1, factorial = 1;
                while (i <= n) 
                {
                    factorial *= i;
                   i++;
                }
                result += "Factorial of " + n + ": " + factorial + "<br>";

                let sum = 0, j = 1;
                do 
                {
                    sum += j;
                    j++;
                } while (j <= n);
                result += "Sum of first " + n + " numbers: " + sum + "<br>";

                let total = 0;
                for (let k = 1; k <= n; k++) 
                {
                    total += k;
                }
                const average = total / n;
                result += "Average of first " + n + " numbers: " + average;

                document.getElementById("result").innerHTML = result;
            });