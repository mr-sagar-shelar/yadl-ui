import type { Meta, StoryObj } from "@storybook/react";
import Themeisle390 from "../Themeisle390";

const meta: Meta<typeof Themeisle390> = { title: "Themeisle/Themeisle390", component: Themeisle390 };

export default meta;
type Story = StoryObj<typeof Themeisle390>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
