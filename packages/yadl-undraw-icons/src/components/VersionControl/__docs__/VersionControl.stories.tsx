import type { Meta, StoryObj } from "@storybook/react";
import VersionControl from "../VersionControl";

const meta: Meta<typeof VersionControl> = { title: "unDraw/VersionControl", component: VersionControl };

export default meta;
type Story = StoryObj<typeof VersionControl>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
