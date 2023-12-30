import os
from flask import Flask, send_from_directory, render_template

from startpage import startpage


# Initialise flask
app = Flask(__name__, static_folder='static')

# Register blueprint
app.register_blueprint(
    startpage,
    url_prefix='/'
)

# Handles error
@app.errorhandler(404) 
def handle_bad_request(e):
    return render_template("404.html", error_message=str(e)), {"Refresh": "7.5; url=/"}


if __name__ == '__main__': 
    app.run(
        debug=True, 
        port=8000
    )