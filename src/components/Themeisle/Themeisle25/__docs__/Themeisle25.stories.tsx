import type { Meta, StoryObj } from "@storybook/react";
import Themeisle25 from "../Themeisle25";

const meta: Meta<typeof Themeisle25> = { title: "Themeisle/Themeisle25", component: Themeisle25 };

export default meta;
type Story = StoryObj<typeof Themeisle25>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
