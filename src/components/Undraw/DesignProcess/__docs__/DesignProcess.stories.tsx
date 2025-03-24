import type { Meta, StoryObj } from "@storybook/react";
import DesignProcess from "../DesignProcess";

const meta: Meta<typeof DesignProcess> = { title: "unDraw/DesignProcess", component: DesignProcess };

export default meta;
type Story = StoryObj<typeof DesignProcess>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
