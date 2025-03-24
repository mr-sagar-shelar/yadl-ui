import type { Meta, StoryObj } from "@storybook/react";
import VueJS from "../VueJS";

const meta: Meta<typeof VueJS> = { title: "SkillSet/VueJS", component: VueJS };

export default meta;
type Story = StoryObj<typeof VueJS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
