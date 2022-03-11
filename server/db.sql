CREATE TABLE todo(
id SERIAL PRIMARY KEY NOT NULL,
task text UNIQUE,
status INTEGER DEFAULT 0
);

INSERT todo (task, status) VALUES ('mow the lawn', 0), ('clean up bedroom', 0), ('clean up kitchen', 0), ('walk dog', 0);