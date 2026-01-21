Database Fundamentals – Conceptual Understanding

## 1. Why is db.json not suitable as a database for real projects?

`db.json` is a file-based storage system and is not suitable for real-world applications because of several limitations.

### Limitations of file-based storage:

**Performance**
- Every read or write operation requires reading the entire file.
- As data grows, operations become slow and inefficient.

**Scalability**
- It does not scale well with large amounts of data.
- Handling thousands or millions of records becomes impractical.

**Concurrency**
- Multiple users accessing or modifying the file at the same time can cause data corruption.
- There is no proper locking or transaction support.

**Reliability**
- If the file gets corrupted or deleted, data can be permanently lost.
- No built-in backup or recovery mechanisms.

Because of these issues, file-based storage like `db.json` is suitable only for learning or small demos, not production systems.

---

## 2. What are the ideal characteristics of a database system (apart from just storage)?

A good database system provides much more than just storing data.

### Ideal characteristics:

**Performance**
- Fast data retrieval and write operations.
- Optimized queries and indexing.

**Concurrency**
- Supports multiple users accessing data simultaneously without conflicts.
- Uses locking and transactions to maintain consistency.

**Reliability**
- Ensures data is not lost due to crashes or failures.
- Provides backup and recovery mechanisms.

**Data Integrity**
- Maintains accuracy and consistency of data.
- Uses constraints like primary keys, foreign keys, and validations.

**Scalability**
- Can handle increasing data volume and users.
- Supports vertical and horizontal scaling.

**Fault Tolerance**
- Continues functioning even if part of the system fails.
- Replication and redundancy help achieve this.

---

## 3. How many types of databases are there? What are their use cases?

Databases are broadly classified into two main types.

### 1. Relational Databases (SQL)

**Description**
- Data is stored in tables with rows and columns.
- Uses structured schema and SQL queries.

**Examples**
- MySQL
- PostgreSQL
- Oracle
- SQL Server

**Use cases**
- Banking systems
- E-commerce applications
- Inventory management
- Applications requiring strong data consistency and relationships

---

### 2. Non-Relational Databases (NoSQL)

**Description**
- Data is stored in flexible formats like documents, key-value pairs, or graphs.
- Schema is dynamic or schema-less.

**Examples**
- MongoDB
- Redis
- Cassandra
- Firebase

**Use cases**
- Social media platforms
- Real-time chat applications
- Big data and analytics
- Applications with rapidly changing data structures

---

## Conclusion

Relational databases are best for structured data and strong consistency, while NoSQL databases are preferred for scalability, flexibility, and high-performance distributed systems.
