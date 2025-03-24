import type { Meta, StoryObj } from "@storybook/react";
import CPP from "../CPP";

const meta: Meta<typeof CPP> = { title: "SkillSet/CPP", component: CPP };

export default meta;
type Story = StoryObj<typeof CPP>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
