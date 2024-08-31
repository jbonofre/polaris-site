# Entities

This page documents various entities that can be managed in Apache Polaris (Incubating).

## Catalog

A catalog is a top-level entity in Polaris that may contain other entities like [namespaces](#namespace) and [tables](#table). These map directly to [Apache Iceberg catalogs](https://iceberg.apache.org/concepts/catalog/).

### Storage Type

All catalogs in Polaris are associated with a _storage type_. Valid Storage Types are `S3`, `Azure`, and `GCS`. The `FILE` type is also additionally available for testing. Each of these types relates to a different storage provider where data within the catalog may reside. Depending on the storage type, various other configurations may be set for a catalog including credentials to be used when accessing data inside the catalog.

## Namespace

A namespace is a logical entity that resides within a [catalog](#catalog) and can contain other entities such as [tables](#table) or [views](#view). Some other systems may refer to namespaces as _schemas_ or _databases_.

In Polaris, namespaces can be nested. For example, `a.b.c.d.e.f.g` is a valid namespace. `b` is said to reside within `a`, and so on.

## Table

Polaris tables are entities that map to [Apache Iceberg tables](https://iceberg.apache.org/docs/nightly/configuration/).

## View

Polaris views are entities that map to [Apache Iceberg views](https://iceberg.apache.org/view-spec/).

## Principal

Polaris principals are unique identities that can be used to represent users or services. Each principal may have one or more [principal roles](#principal-role) assigned to it for the purpose of accessing catalogs and the entities within them.

## Principal Role

Polaris principal roles are labels that may be granted to [principals](#principal). Each principal may have one or more principal roles, and the same principal role may be granted to multiple principals. Principal roles may be assigned based on the persona or responsibilities of a given principal, or on how that principal will need to access different entities within Polaris.

## Catalog Role

Polaris catalog roles are labels that may be granted to [catalogs](#catalog). Each catalog may have one or more catalog roles, and the same catalog role may be granted to multiple catalogs. Catalog roles may be assigned based on the nature of data that will reside in a catalog, or by the groups of users and services that might need to access that data. 

Each catalog role may have multiple [privileges](#privilege) granted to it, and each catalog role can be granted to one or more [principal roles](#principal-role). This is the mechanism by which principals are granted access to entities inside a catalog such as namespaces and tables.

## Privilege

Polaris privileges are granted to [catalog roles](#catalog-role) in order to grant principals with a given principal role some degree of access to catalogs with a given catalog role. When a privilege is granted to a catalog role, any principal roles granted that catalog role receive the privilege. In turn, any principals who are granted that principal role receive it. 

A privilege can be scoped to any entity inside a catalog, including the catalog itself.

For a list of supported privileges for each privilege class, see the API docs:
* Table Privileges
* View Privileges
* Namespace Privileges
* Catalog Privileges
