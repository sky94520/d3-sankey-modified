import os
import json
from pathlib import Path
from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)
bootstrap = Bootstrap(app)
basedir = os.path.abspath(os.path.dirname(__file__))


@app.route('/')
def index():
    return render_template('sankey.html')


@app.route('/get_trend')
def get_trend():
    filename = Path(basedir) / 'uploads' / '1.4.3_lda.json'
    with filename.open('r', encoding='utf-8') as fp:
        json_data = json.load(fp)
        return json.dumps(json_data, ensure_ascii=False)


if __name__ == '__main__':
    app.run()
