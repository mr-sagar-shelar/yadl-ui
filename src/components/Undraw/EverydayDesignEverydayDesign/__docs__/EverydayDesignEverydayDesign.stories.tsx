import type { Meta, StoryObj } from "@storybook/react";
import EverydayDesignEverydayDesign from "../EverydayDesignEverydayDesign";

const meta: Meta<typeof EverydayDesignEverydayDesign> = { title: "unDraw/EverydayDesignEverydayDesign", component: EverydayDesignEverydayDesign };

export default meta;
type Story = StoryObj<typeof EverydayDesignEverydayDesign>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
