import type { Meta, StoryObj } from "@storybook/react";
import Elysia from "../Elysia";

const meta: Meta<typeof Elysia> = { title: "SkillSet/Elysia", component: Elysia };

export default meta;
type Story = StoryObj<typeof Elysia>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
