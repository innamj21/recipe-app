from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    return 'hi is this workin'
if __name__ == '__main__':
    app.run()