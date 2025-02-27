import datetime
import re
import whois
from flask import Flask, render_template, jsonify, request

app = Flask(__name__)


def is_valid_domain(domain):
    domain_regex = re.compile(
        r"^(?:[a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,}$"
    )
    return bool(domain_regex.match(domain))


def safe_serialize(obj):
    if isinstance(obj, set):
        return list(obj)
    elif isinstance(obj, (datetime.datetime, datetime.date)):
        return obj.isoformat()
    return obj

@app.route('/')
def home():
    return render_template('index.html')


@app.route('/whois', methods=['POST'])
def whois_lookup():
    data = request.get_json()
    domain = data.get("domain", "").strip()

    if not domain:
        return jsonify({"error": "Domain is required"}), 400

    if not is_valid_domain(domain):
        return jsonify({"error": "Invalid domain format"}), 400

    try:
        whois_data = whois.whois(domain)
        safe_data = {key: safe_serialize(value) for key, value in whois_data.items()}
        return jsonify(safe_data)
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run()
