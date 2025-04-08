import type { Meta, StoryObj } from "@storybook/react";
import SnapTheMoment from "../SnapTheMoment";

const meta: Meta<typeof SnapTheMoment> = { title: "unDraw/SnapTheMoment", component: SnapTheMoment };

export default meta;
type Story = StoryObj<typeof SnapTheMoment>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
