import type { Meta, StoryObj } from "@storybook/react";
import NextJS from "../NextJS";

const meta: Meta<typeof NextJS> = { title: "SkillSet/NextJS", component: NextJS };

export default meta;
type Story = StoryObj<typeof NextJS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
