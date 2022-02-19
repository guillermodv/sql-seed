CREATE TABLE IF NOT EXISTS projects(
    id integer  PRIMARY KEY  GENERATED BY DEFAULT AS IDENTITY,
    name text NOT NULL CHECK (name <> ''),
    priority integer NOT NULL,
    description text,
    deliveryDate date NOT NULL
);

CREATE TABLE IF NOT EXISTS tasks(
    id integer  PRIMARY KEY,
    name text NOT NULL CHECK (name <> ''),
    done BOOLEAN,
    projectId INTEGER REFERENCES projects(id)
);

 INSERT INTO projects (name, priority, description deliveryDate)
    VALUES('Make a web app', 2, 'Using Javascript','2019-05-12')