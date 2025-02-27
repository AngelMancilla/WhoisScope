# WhoisScope

WhoisScope is a simple web application that allows users to quickly retrieve WHOIS information for any domain. The application uses the [Python-WHOIS](https://github.com/python-whois/python-whois) library for querying WHOIS data and displays it in a user-friendly interface using Metro UI.

## Features

- Input a domain name and get detailed WHOIS information.
- Beautiful, responsive interface powered by Metro UI.
- Easy-to-understand output, including JSON data formatted in a readable table.

## Tech Stack

- **Frontend**: HTML, JavaScript, Metro UI
- **Backend**: Python (Flask)
- **WHOIS Lookup**: Python-WHOIS
- **API Communication**: Fetch API (JavaScript)
- **Styling**: Metro UI for a sleek, responsive design.

## Installation

### Prerequisites

1. Python 3.x
2. Flask
3. Python-WHOIS

### Steps to Run Locally

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/whiscope.git
    cd whiscope
    ```

2. Set up a virtual environment (optional but recommended):

    ```bash
    python3 -m venv venv
    source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
    ```

3. Install the necessary Python packages:

    ```bash
    pip install -r requirements.txt
    ```

    `requirements.txt` should contain:

    ```
    Flask
    python-whois
    ```

4. Start the Flask development server:

    ```bash
    python app.py
    ```

    This will start the Flask server on `http://127.0.0.1:5000`.

5. Open your browser and go to `http://127.0.0.1:5000` to see the app in action.

## How it Works

- The user enters a domain name (e.g., `example.com`) in the input field.
- When the user clicks the "Check WHOIS" button, the frontend sends the domain to the Flask backend via a POST request.
- The Flask backend uses the Python-WHOIS library to query WHOIS data for the domain.
- The WHOIS data is returned to the frontend, where it is displayed in a clean, organized table.

###

Made by AngelMancilla

