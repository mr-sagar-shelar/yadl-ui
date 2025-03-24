import type { Meta, StoryObj } from "@storybook/react";
import Themeisle68 from "../Themeisle68";

const meta: Meta<typeof Themeisle68> = { title: "Themeisle/Themeisle68", component: Themeisle68 };

export default meta;
type Story = StoryObj<typeof Themeisle68>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
