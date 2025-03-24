import type { Meta, StoryObj } from "@storybook/react";
import DesignObjectives from "../DesignObjectives";

const meta: Meta<typeof DesignObjectives> = { title: "unDraw/DesignObjectives", component: DesignObjectives };

export default meta;
type Story = StoryObj<typeof DesignObjectives>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
