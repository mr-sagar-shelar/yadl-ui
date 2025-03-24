import type { Meta, StoryObj } from "@storybook/react";
import MaterialUI from "../MaterialUI";

const meta: Meta<typeof MaterialUI> = { title: "SkillSet/MaterialUI", component: MaterialUI };

export default meta;
type Story = StoryObj<typeof MaterialUI>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
