import type { Meta, StoryObj } from "@storybook/react";
import Postman from "../Postman";

const meta: Meta<typeof Postman> = { title: "SkillIcon/Postman", component: Postman };

export default meta;
type Story = StoryObj<typeof Postman>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
