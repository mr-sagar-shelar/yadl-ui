import type { Meta, StoryObj } from "@storybook/react";
import Rails from "../Rails";

const meta: Meta<typeof Rails> = { title: "SkillIcon/Rails", component: Rails };

export default meta;
type Story = StoryObj<typeof Rails>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
