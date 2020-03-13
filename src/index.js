LOGIN = `
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            refreshToken
            accessToken
        }
    }
`;

INDIVIDIAL_FEEDBACK = `
    query IndividualFeedback {
        IndividualFeedback {
            id
            creator {
                date {
                    formatted
                }
                User {
                    firstname
                    lastname
                    positions {
                        Position {
                            description
                        }
                    }
                    location {
                        Location {
                            description
                        }
                    }
                }
            }
        }
    }
`;

SOFT_SKILLS_QUERY = `
  query SoftSkills {
    SoftSkill {
      id
      name
      description
    }
  }
`;

HARD_SKILLS_QUERY = `
  query HardSkills {
    HardSkill {
      id
      name
      description
    }
  }
`;

module.exports = {
  LOGIN,
  INDIVIDUAL_FEEDBACK,
  SOFT_SKILLS_QUERY,
  HARD_SKILLS_QUERY
};
