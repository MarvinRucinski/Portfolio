html = '''<a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/python-colored.svg" width="36" height="36" alt="Python" /></a> 
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/django-colored.svg" width="36" height="36" alt="Django" /></a> 
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/flask.svg" width="36" height="36" alt="Flask" /></a> 
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/swift-colored.svg" width="36" height="36" alt="Swift" /></a> 
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/php-colored.svg" width="36" height="36" alt="PHP" /></a> 
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/html5-colored.svg" width="36" height="36" alt="HTML5" /></a> 
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/css3-colored.svg" width="36" height="36" alt="CSS3" /></a> 
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/javascript-colored.svg" width="36" height="36" alt="JavaScript" /></a>
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/jquery-colored.svg" width="36" height="36" alt="JQuery" /></a> 
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/react-colored.svg" width="36" height="36" alt="React" /></a> 
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/vuejs-colored.svg" width="36" height="36" alt="Vue" /></a> 
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/mysql-colored.svg" width="36" height="36" alt="MySQL" /></a> 
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/cplusplus-colored.svg" width="36" height="36" alt="C++" /></a>
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/xd-colored.svg" width="36" height="36" alt="XD" /></a> 
      <a href="" target="_blank" rel="noreferrer"><img src="src/media/technologies/figma-colored.svg" width="36" height="36" alt="Figma" /></a>'''
data = {}
names = []
for icon in html.split('\n'):
    name = icon.split('alt="')[1].split('"')[0]
    src = icon.split('src="')[1].split('"')[0].split('/')[-1]
    data[name] = src
    names.append(name)
print(data,names)