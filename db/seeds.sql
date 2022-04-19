INSERT INTO departments (id, dept_name)
VALUES
    (1, "Executive"),
    (2, "Marketing"),
    (3, "Engineering"),
    (4, "Product"),
    (5, "Human Resources"),
    (6, "Sales");

INSERT INTO roles (id, title, department_id, salary)
VALUES
    (1, "Chairman and Vice President", 1, 56.7),
    (2, "Vice President of Marketing", 1, 1223.8),
    (3, "Vice President of Engineering", 3, 5);

INSERT INTO employees( id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "George", "Constanza", 1, 1),
    (2, "Newman", "Mailman", 1, 2),
    (3, "Jerry", "Seinfield", 2, 1),
    (4, "Kosmo", "Kramer", 3, 1);
