import type { Meta, StoryObj } from "@storybook/react";
import BSD from "../BSD";

const meta: Meta<typeof BSD> = { title: "SkillIcon/BSD", component: BSD };

export default meta;
type Story = StoryObj<typeof BSD>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
