import type { Meta, StoryObj } from "@storybook/react";
import Sequelize from "../Sequelize";

const meta: Meta<typeof Sequelize> = { title: "SkillIcon/Sequelize", component: Sequelize };

export default meta;
type Story = StoryObj<typeof Sequelize>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
