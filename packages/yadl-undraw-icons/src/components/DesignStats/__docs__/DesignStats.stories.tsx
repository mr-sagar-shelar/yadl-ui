import type { Meta, StoryObj } from "@storybook/react";
import DesignStats from "../DesignStats";

const meta: Meta<typeof DesignStats> = { title: "unDraw/DesignStats", component: DesignStats };

export default meta;
type Story = StoryObj<typeof DesignStats>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
