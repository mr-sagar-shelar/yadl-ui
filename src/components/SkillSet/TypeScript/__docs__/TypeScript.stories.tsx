import type { Meta, StoryObj } from "@storybook/react";
import TypeScript from "../TypeScript";

const meta: Meta<typeof TypeScript> = { title: "SkillSet/TypeScript", component: TypeScript };

export default meta;
type Story = StoryObj<typeof TypeScript>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
