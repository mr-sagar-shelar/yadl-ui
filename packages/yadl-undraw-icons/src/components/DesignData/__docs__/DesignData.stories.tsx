import type { Meta, StoryObj } from "@storybook/react";
import DesignData from "../DesignData";

const meta: Meta<typeof DesignData> = { title: "unDraw/DesignData", component: DesignData };

export default meta;
type Story = StoryObj<typeof DesignData>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
