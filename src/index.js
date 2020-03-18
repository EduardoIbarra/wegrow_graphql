const LOGIN = `
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            refreshToken
            accessToken
        }
    }
`;

const INDIVIDUAL_FEEDBACK = `
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

const SOFT_SKILLS_QUERY = `
  query SoftSkills {
    SoftSkill {
      id
      name
      description
    }
  }
`;

const HARD_SKILLS_QUERY = `
  query HardSkills {
    HardSkill {
      id
      name
      description
    }
  }
`;

const RESET_PASSWORD = `
    mutation resetPassword($email: String!) {
        resetPassword(email: $email)
    }
`;

module.exports = {
  LOGIN,
  INDIVIDUAL_FEEDBACK,
  SOFT_SKILLS_QUERY,
  HARD_SKILLS_QUERY,
  RESET_PASSWORD
};
