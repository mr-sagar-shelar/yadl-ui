import type { Meta, StoryObj } from "@storybook/react";
import NICEEnginFrame from "../NICEEnginFrame";

const meta: Meta<typeof NICEEnginFrame> = { title: "AWS/Compute/NICEEnginFrame", component: NICEEnginFrame };

export default meta;
type Story = StoryObj<typeof NICEEnginFrame>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
