async function getWhois() {
    let domain = document.getElementById("domainInput").value.trim();

    domain = domain.replace(/^https?:\/\//, '').trim();
    domain = domain.replace(/\/$/, '').trim();

    if (!domain) {
        Metro.notify.create("Please enter a valid domain", "Error", {cls: "alert"});
        return;
    }

    try {
        let response = await fetch('/whois', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({domain})
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        let data = await response.json();
        let outputDiv = document.getElementById("output");
        outputDiv.style.display = "block";

        outputDiv.innerHTML = '';

        if (data.error) {
            outputDiv.innerHTML = `<div class="alert alert-danger">${data.error}</div>`;
        } else {

            let table = `<table class="table table-bordered table-striped">`;


            for (let key in data) {
                if (data.hasOwnProperty(key)) {
                    let value = data[key];

                    if (typeof value === "object") {
                        value = JSON.stringify(value, null, 4);
                    }
                    table += `
                        <tr>
                            <td><strong>${key}</strong></td>
                            <td><pre>${value}</pre></td>
                        </tr>`;
                }
            }

            table += `</table>`;

            outputDiv.innerHTML = table;
        }

    } catch (error) {
        Metro.notify.create("Failed to retrieve WHOIS data", "Error", {cls: "alert"});
    }
}

