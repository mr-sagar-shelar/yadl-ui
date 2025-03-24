import type { Meta, StoryObj } from "@storybook/react";
import NestJS from "../NestJS";

const meta: Meta<typeof NestJS> = { title: "SkillSet/NestJS", component: NestJS };

export default meta;
type Story = StoryObj<typeof NestJS>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
