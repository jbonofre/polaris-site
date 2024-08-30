# Community

## Mailing Lists

* **Developers** [ [subscribe](mailto:dev-subscribe@polaris.apache.org) | [archives](https://lists.apache.org/list.html?dev@polaris.apache.org) ]
* **Commits** [ [subscribe](mailto:commits-subscribe@polaris.apache.org) ] | [archives](https://lists.apache.org/list.html?commits@polaris.apache.org) ]
* **Issues** [ [subscribe](mailto:issues-subscribe@polaris.apache.org) ] | [archives](https://lists.apache.org/list.html?issues@polaris.apache.org) ]

## Bug Tracker, Zulip Chat, and CI

* **GitHub Issues** [ [visit](https://github.com/apache/polaris/issues) ]
* **GitHub Actions** [ [visit](https://github.com/apache/polaris/actions/workflows/gradle.yml?query=branch%3Amain) ]
* **Zulip Chat** [ [visit](https://polaris-catalog.zulipchat.com/) ]

## Contribute

### Report a bug

Note: If you find a **security vulnerability**, do _NOT_ open an issue. Please email [security@apache.org](mailto:security@apache.org) instead.

When filing an [issue](https://github.com/apache/polaris/issues), make sure to answer these five questions:
1. What version of Apache Polaris (incubating) are you using?
2. What operating system and processor architecture are you using?
3. What did you do?
4. What did you expect to see?
5. What did yo9u see instead?

Troubleshooting questions should be posted on the [dev mailing list](mailto:dev@polaris.apache.org) or [public chat](https://polaris-catalog.zulipchat.com/).
Maintainers and community members will answer your questions there or ask you to file an issue if you've encoutered a bug.

### Suggest a feature or enhancement

Apache Polaris (incubating) aims to provide the Apache Iceberg&trade; community with new levels of choice, flexibility and control over their data, with full enterprise security and interoperability with Amazon Web Services (AWS), Confluent, Dremio, Google Cloud, Microsoft Azure, Salesforce and more.

If you're looking for a feature that doesn't exist in Apache Polaris (incubating), you're probably not alone. Others likely have similar needs. Please open an [issue](https://github.com/apache/polaris/issues) describing the feature you'd like to see, why you need it, and how it should work.

When creating your feature request, document your requirements first. Please, try to not directly describe the solution.

### Before contributing code

#### Review open issues and discuss your approach

If you want to dive into development yourself then you can check out existing open issues or requests for features that need to be implemented. Take owmership of an issue and try fix it.

Before starting on a large code change, please describe the concept/design of what you plan to do on the issue/feature request you intend to address. If unsure if the design is good or will be accepted, discuss it with the community in the respective issue first, before you do too much active development.

#### Provide your changes in a Pull Request

The best way to provide changes is to fork Apache Polaris repository on GitHub and provide a Pull Request with your changes. To make it easy to apply your changes please use the following conventions:

* Every Pull Request should have a matching GitHub Issue.
* Create a branch that will house your change:

```bash
git clone https://github.com/apache/polaris
cd polaris
git fetch --all
git checkout -b my-branch origin/main
```

  Don't forget to periodically rebase your branch:

```bash
git pull --rebase
git push GitHubUser my-branch --force
```

  Ensure the code is properly formatted:

```bash
./gradlew format
```

* Pull Requests should be based on the `main` branch.
* Test that your changes works by adapting or adding tests. Verify the build passes (see `README.md` for build instructions).
* If your Pull Request has conflicts with the `main` branch, please rebase and fix the conflicts.

### Java version requirements

* [SDKMAN!](https://sdkman.io/) follow the installation instructions, then run `sdk list java` to see the available distributions and versions, then run `sdk install java <identifer from list>` using the identifier for the distribution and version (>= 21) of your choice.
* [jenv](https://www.jenv.be/) If on a Mac you can use jenv to set the appropriate SDK.

## Team

| Name | ID | Mentor | PPMC | Organization |
|------|----|--------|------|--------------|
| Anoop Johnson | anoop | | <img src="img/check-mark.png" width="20px"/> | [Google](https://www.google.com/) |
| Ashvin Agrawal | ashvin | | <img src="img/check-mark.png" width="20px"/> | [Microsoft](https://www.microsoft.com/) |
| Bertrand Delacretaz | bdelacretaz | <img src="img/check-mark.png" width="20px"/> | | |
| Holden Karau | holden | <img src="img/check-mark.png" width="20px"/> | | |
| Jack Ye | jackye | | <img src="img/check-mark.png" width="20px"/> | [AWS](https://aws.amazon.com/) |
| JB Onofre | jbonofre | <img src="img/check-mark.png" width="20px"/> | <img src="img/check-mark.png" width="20px"/> | [Dremio](https://www.dremio.com) |
| John Roesler | vvcephei | | <img src="img/check-mark.png" width="20px"/> | [Confluent](https://www.confluent.io) |
| Kent Yao | yao | <img src="img/check-mark.png" width="20px"/> | | |
| Robert Stupp | snazy | | <img src="img/check-mark.png" width="20px"/> | [Dremio](https://www.dremio.com) |
| Russell Spitzer | russellspitzer | | <img src="img/check-mark.png" width="20px"/> | [Snowflake](https://www.snowflake.com) |
| Ryan Blue | blue | <img src="img/check-mark.png" width="20px"/> | | |
| Tyler Akidau | takidau | | <img src="img/check-mark.png" width="20px"/> | [Snowflake](https://www.snowflake.com) |
