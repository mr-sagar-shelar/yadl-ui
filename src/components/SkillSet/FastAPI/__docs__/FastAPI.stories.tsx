import type { Meta, StoryObj } from "@storybook/react";
import FastAPI from "../FastAPI";

const meta: Meta<typeof FastAPI> = { title: "SkillSet/FastAPI", component: FastAPI };

export default meta;
type Story = StoryObj<typeof FastAPI>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
