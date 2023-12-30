from flask import Blueprint, render_template, send_from_directory


startpage = Blueprint(__name__, 'startpage')

# root page
@startpage.route('/')
def home(): 
    return render_template('startpage.html')