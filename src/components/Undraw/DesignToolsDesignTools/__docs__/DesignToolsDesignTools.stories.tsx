import type { Meta, StoryObj } from "@storybook/react";
import DesignToolsDesignTools from "../DesignToolsDesignTools";

const meta: Meta<typeof DesignToolsDesignTools> = { title: "unDraw/DesignToolsDesignTools", component: DesignToolsDesignTools };

export default meta;
type Story = StoryObj<typeof DesignToolsDesignTools>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
