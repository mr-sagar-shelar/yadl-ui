import type { Meta, StoryObj } from "@storybook/react";
import Heroku from "../Heroku";

const meta: Meta<typeof Heroku> = { title: "SkillSet/Heroku", component: Heroku };

export default meta;
type Story = StoryObj<typeof Heroku>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
